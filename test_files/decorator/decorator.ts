// OtherClass is reachable via the imports for './external' and './external2'.
// Test that were using it from the right import, and not just the first
// that allows access to the value. That is important when imports are elided.
import DefaultImport from './default_export';
import {AClass, AClass as ARenamedClass, AClassWithGenerics, AType, ReexportedOtherClass} from './external';
import {OtherClass} from './external2';
import {AnotherType} from './only_types';
import * as api from './only_types';

function decorator(a: Object, b: string) {}

/** @Annotation */
function annotationDecorator(a: Object, b: string): any { return null!; }

function classDecorator(t: any) {
  return t;
}

type classAnnotation = {};
// should not matter, but getDeclarations() returns this node too.
// Comment comes after statement so that type alias does not have
// a comment on its own.

/** @Annotation */
function classAnnotation(t: any) {
  return t;
}

type LocalTypeAlias = Map<string, number>;

@classAnnotation
class DecoratorTest {
  constructor(
      a: any[],
      @annotationDecorator(1, 'args') anyDecorated: any,
      n: number,
      b: boolean,
      promise: Promise<string>,
      arr: Array<string>,
      aClass: AClass,
      AClass: AClass,
      aRenamedClass: ARenamedClass,
      aClassWithGenerics: AClassWithGenerics<string>,
      aType: AType,
      defaultImport: DefaultImport,
      localTypeAlias: LocalTypeAlias,
      // Note: this gets emitted as "ReexportedOtherClass" because TypeScript
      // uses the first symbol in the local scope that aliases the final symbol,
      // which in here is ReexportedOtherClass.
      otherClass: OtherClass,
      anotherClass: ReexportedOtherClass,
      anotherType: AnotherType[],
      anotherPrefixed: api.AnotherType,
      fnUsingAType: (t: AType) => string,
      valueWithCtorSignature = {constructor(x: string) {}},
  ) {}

  @annotationDecorator
  get w(): number {
    return 1;
  }

  /** Some comment */
  @decorator private x: number;

  @annotationDecorator private y: number;

  @decorator private z: AClass;
}

@classDecorator
class DecoratedClass {
  z: string;
}
