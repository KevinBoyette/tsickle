// test_files/import_by_path.no_externs/conflicting_multiple_empty.ts(5,41): error TS0: referenced JavaScript module google3/path/to/multiple_provides/conflicting provides multiple namespaces and cannot be imported by path.
/**
 *
 * @fileoverview Negative test for importing no symbols from a module, by path.
 *
 * Generated from: test_files/import_by_path.no_externs/conflicting_multiple_empty.ts
 * @suppress {checkTypes,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.import_by_path.no_externs.conflicting_multiple_empty');
var module = module || { id: 'test_files/import_by_path.no_externs/conflicting_multiple_empty.ts' };
goog.require('tslib');
const tsickle_conflicting_1 = goog.requireType("multiple.provides.conflicting.a");
