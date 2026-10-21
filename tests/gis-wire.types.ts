import type { GisApi, Dataset, MapRecord, ImportJob, FeatureCollection, Place, TileResponse } from '@faiber/faiber-gis';
import type { FaiberSDK } from '@faiber/faiber-ts-sdk';
declare const sdk: FaiberSDK;
declare const api: GisApi;
const facade: GisApi = sdk.gis;
const id = '11111111-1111-4111-8111-111111111111';
api.operations.createDataset({name:'Survey', attribution:'Survey team', license:'CC-BY-4.0', source:'Reviewed survey', scope:'user'});
api.operations.createMap({slug:'survey',name:'Survey',dataset_id:id,center:[49,37],bounds:[48,36,50,38],zoom:12});
api.operations.writeFeatures(id,{expected_revision:1,reason:'Verified edit',features:[{id:'point/1',geometry:{type:'Point',coordinates:[49,37]}}]});
api.operations.resolveReport(id,{reason:'Verified correction'});
// @ts-expect-error publication requires explicit expected revision and reason
api.operations.publishDataset(id,{status:'published',visibility:'public'});
// @ts-expect-error bounds are a fixed west/south/east/north tuple
api.operations.createImport({name:'Area',bounds:[49,37],scope:'organization'});
// @ts-expect-error write properties must be an object, not an array
api.operations.writeFeatures(id,{expected_revision:1,reason:'Correction',features:[{id:'one',geometry:{type:'Point'},properties:[]}]});
// @ts-expect-error private place notes are required by the native input
api.operations.createPersonalPlace({name:'Home',category:'home',latitude:37,longitude:49});
declare const tile: TileResponse;
const binary: ArrayBuffer = tile;
// @ts-expect-error vector tiles are not a JSON envelope
tile.data;
declare const dataset: Dataset;
const owner: string | null = dataset.owner_id;
declare const job: ImportJob;
// @ts-expect-error the native index strips the internal lease token
job.lease_id;
declare const map: MapRecord;
const center: [number,number] = map.center;
declare const geo: FeatureCollection;
const geometryType: 'FeatureCollection' = geo.type;
declare const place: Place;
const canonical: string | null = place.canonical_id;
void [facade,binary,owner,center,geometryType,canonical];

// Final immutable-source model cases; checked during the combined release type gate.
import type { Geometry, MapStyle, FeatureWriteResult, PlaceAssertionToken } from '@faiber/faiber-gis';
const polygon: Geometry = {type:'Polygon',coordinates:[[[49,37],[50,37],[49,38],[49,37]]]};
const elevated: Geometry = {type:'Point',coordinates:[49,37,10]};
// @ts-expect-error native valid_geometry rejects GeometryCollection
const collection: Geometry = {type:'GeometryCollection',geometries:[]};
// @ts-expect-error Point coordinates are required
const missingCoordinates: Geometry = {type:'Point'};
// @ts-expect-error coordinates must match the declared geometry nesting
const invalidPolygon: Geometry = {type:'Polygon',coordinates:[49,37]};
declare const style: MapStyle;
const styleVersion: 8 = style.version;
const tileUrls: string[] = style.sources.city.tiles;
const centerPair: [number, number] = style.center;
declare const writeResult: FeatureWriteResult;
const featureIds: string[] = writeResult.feature_ids;
declare const assertionToken: PlaceAssertionToken;
const assertionIssuer: 'infera-places' = assertionToken.issuer;
void [polygon,elevated,collection,missingCoordinates,invalidPolygon,styleVersion,tileUrls,centerPair,featureIds,assertionIssuer];
