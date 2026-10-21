use proc_macro::TokenStream;
use quote::quote;
use syn::{
    parse::{Parse, ParseStream},
    parse_macro_input,
    punctuated::Punctuated,
    ItemFn, Lit, Meta, Token,
};

struct MetaArgs {
    metas: Punctuated<Meta, Token![,]>,
}

impl Parse for MetaArgs {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        Ok(Self {
            metas: Punctuated::<Meta, Token![,]>::parse_terminated(input)?,
        })
    }
}

#[proc_macro_attribute]
pub fn should_have_permissions(attr: TokenStream, item: TokenStream) -> TokenStream {
    let MetaArgs { metas } = parse_macro_input!(attr as MetaArgs);
    let func = parse_macro_input!(item as ItemFn);

    let mut path: Vec<String> = Vec::new();
    let mut methods: Vec<String> = Vec::new();
    let mut permissions: Vec<String> = Vec::new();
    let mut aliases: Vec<String> = Vec::new();

    for meta in metas {
        match meta {
            Meta::List(list) => {
                let ident = list
                    .path
                    .get_ident()
                    .expect(
                        "expected path(...) or methods(...) or permissions(...) or aliases(...)",
                    )
                    .to_string();

                let lits: Punctuated<Lit, Token![,]> = list
                    .parse_args_with(Punctuated::<Lit, Token![,]>::parse_terminated)
                    .expect("failed to parse should_have_permissions macro");

                let target = match ident.as_str() {
                    "path" => &mut path,
                    "methods" => &mut methods,
                    "permissions" => &mut permissions,
                    "aliases" => &mut aliases,
                    other => {
                        return syn::Error::new_spanned(
                            list.path,
                            format!("unknown attribute `{other}`"),
                        )
                        .into_compile_error()
                        .into();
                    }
                };

                for lit in lits {
                    if let Lit::Str(s) = lit {
                        target.push(s.value());
                    } else {
                        return syn::Error::new_spanned(lit, "only string literals allowed")
                            .into_compile_error()
                            .into();
                    }
                }
            }
            other => {
                return syn::Error::new_spanned(
                    other,
                    "expected path(\"...\") or methods(\"...\") or permissions(\"...\") or aliases(\"...\")",
                )
                .into_compile_error()
                .into();
            }
        }
    }

    let path_q = path
        .iter()
        .map(|p| quote! { ::std::borrow::Cow::Borrowed(#p) });
    let methods_q = methods
        .iter()
        .map(|p| quote! { ::std::borrow::Cow::Borrowed(#p) });
    let permissions_q = permissions
        .iter()
        .map(|p| quote! { ::std::borrow::Cow::Borrowed(#p) });
    let aliases_q = aliases
        .iter()
        .map(|a| quote! { ::std::borrow::Cow::Borrowed(#a) });

    let submit = quote! {
        ::inventory::submit! {
            ::infera_idp_sdk::ShouldHavePermissionsMeta {
                path: &[ #(#path_q),* ],
                methods: &[ #(#methods_q),* ],
                permissions: &[ #(#permissions_q),* ],
                aliases: &[ #(#aliases_q),* ],
            }
        }
    };

    let expanded = quote! {
        #func
        #submit
    };

    expanded.into()
}
