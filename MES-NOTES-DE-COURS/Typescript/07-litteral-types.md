# <span style="color: #26B260">**literal types.**</span>

[Sommaire](./00-Sommaire.md)

```typescript
// Les types littéraux
    let transition: 'ease-in' | 'ease-out';
    transition = 'ease-in';
    
    function transformX(transition: 'ease-in' | 'ease-out'): void {
        
    }
    
    //transformX(transition:'ease-in');
```

[doc-literal](https://www.typescriptlang.org/docs/handbook/literal-types.html#string-literal-types)
