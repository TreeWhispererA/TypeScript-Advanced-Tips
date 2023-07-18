//Ghost modules
//Also called non-instantiated modules. Instead of polluting the global namespace with many interfaces, it is okay to create a module that contains interfaces only. This does not introduce a variable on the global namespace (see safety in below sample) and this module can only be used for types.

// this pattern has 3 name in top level
interface NodeFoo {}
interface NodeBar {}
interface NodeBuzz {}

// this ghost module has 1 name in top level
declare module NodeJS {
  interface Foo {}
  interface Bar {}
  interface Buzz {}
}

// safety!
var n = NodeJS; // TS Error : Could not find symbol NodeJS
//This also allows you to open up further customization in external modules as interfaces declared inside external module declarations cannot be extended e.g. the following is good as people can customize foo further in other library definitions.

// Usage when declaring an external module
declare module 'foo' {
  var foo: NodeJS.Foo;
  export = foo;
}
