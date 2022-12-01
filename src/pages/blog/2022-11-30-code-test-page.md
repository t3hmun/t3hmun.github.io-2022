---
layout: "../../layouts/BlogPost.astro"
title: "Code Test Page"
description: "A test page for code rendering."
pubDate: "2022-11-30T23:30:00Z"
draft: true
---

```csharp
Console.WriteLine("Potato" + $"Po{true ? "tato" : "..."}");

class Potato
{
    public string Potato()
    {
        // Is potato
    }
}
```

```js
let x = `${"this is the best way to do strings"}`;
```

```tsx
export function Potato(props: PotatoProps): JSX.Element {
  const [thing, setThing] = useState<string | null>(null);
  return (
    <>
      <div>
        <p>Imagine ascii art of a potato.</p>
      </div>
    </>
  );
}
```
