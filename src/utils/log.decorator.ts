// @ts-nocheck
export function logClassMethods<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      debugger

      const className = constructor.name;

      // Ottenere la lista dei nomi dei metodi della classe
      const methodNames = Object.getOwnPropertyNames(this)
        .filter(name => name !== 'constructor' && typeof this[name] === 'function');

      // Aggiungere il logging a ciascun metodo
      methodNames.forEach(methodName => {
        const originalMethod = this[methodName];

        this[methodName] = function (...args: any[]) {
          console.log(`Chiamato metodo ${methodName} della classe ${className}`);
          return originalMethod.apply(this, args);
        };
      });
    }
  };
}