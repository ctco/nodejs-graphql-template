/**
 * Type definitions for third party libraries.
 */
interface Storage extends Map<any, any> {
  enter: Function;
  exit: Function;
}

/**
 * Merging default type definitions with below.
 */
declare module NodeJS {
  interface Process {
    storage: Storage;
  }
}
