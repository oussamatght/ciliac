// Type augmentation for React 19 compatibility with shadcn/ui components
// React 19 changed how types are exported. This file adds back compatibility.

/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "react" {
  // Re-add types that are no longer exported from the "react" namespace in React 19
  export type PropsWithChildren<P = unknown> = P & { children?: ReactNode };
  
  export type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
    T extends JSXElementConstructor<infer P>
      ? P & { children?: ReactNode }
      : T extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[T] & { children?: ReactNode }
        : never;

  export type ComponentPropsWithRef<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
    ComponentProps<T>;
    
  export type ComponentPropsWithoutRef<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
    Omit<ComponentProps<T>, "ref">;
}
