import { shortIdFromUuid, type FaiberSDK } from '@faiber/faiber-ts-sdk';
import type { Classroom, ClassroomSearchInput } from '@faiber/faiber-lms';
import type { Profile, ProfileSearchInput } from '@faiber/faiber-profile';

async function consumer(sdk: FaiberSDK, classroom: Classroom, profile: Profile) {
    const classroomCode: string = classroom.short_id;
    const profileCode: string = profile.short_id;
    const locallyDerived: string = shortIdFromUuid(profile.id);
    const classroomInput: ClassroomSearchInput = { search: classroomCode, 'page[size]': 20 };
    const profileInput: ProfileSearchInput = { search: profileCode, role: 'student', per_page: 20 };
    const classes = await sdk.lms.searchClassrooms(classroomInput);
    const people = await sdk.profile.searchProfiles(profileInput);
    const classCode: string = classes.data.data.data[0]!.short_id;
    const personCode: string = people.data.data.profiles[0]!.short_id;
    const results = await sdk.profile.operations.profileSearchSearchPost({ search: locallyDerived });
    const resultCode: string = results.data.data.results[0]!.short_id;
    // @ts-expect-error Search requires an explicit search string.
    sdk.lms.searchClassrooms({});
    // @ts-expect-error UUID-derived codes are strings.
    const invalid: number = resultCode;
    return [classCode, personCode, invalid];
}
void consumer;
