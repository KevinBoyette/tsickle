/**
 * @fileoverview negative tests for the tsMigrationExportsShim transformation.
 *
 * Suppress expected errors for :test_files_compilation_test
 * @suppress {checkTypes,visibility}
 */
export declare const exported = 1;
export declare const nested: {
    X: number;
};
export interface AnInterface {
    shouldBeANumber: number;
}
declare global {
    namespace ಠ_ಠ.clutz {
        export { AnInterface as module$contents$test_files$ts_migration_exports_shim$no_externs$puretransform$declaration$bad_AnInterface, exported as module$contents$test_files$ts_migration_exports_shim$no_externs$puretransform$declaration$bad_exported, nested as module$contents$test_files$ts_migration_exports_shim$no_externs$puretransform$declaration$bad_nested };
        export namespace module$exports$test_files$ts_migration_exports_shim$no_externs$puretransform$declaration$bad {
            export { AnInterface, exported, nested };
        }
    }
}
