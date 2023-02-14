# plain-skeleton-loader

## To view the output, follow the below link

[StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-9m1rrg)

# Approach

A simple approach to deal this problem is to use prop children to take the shadow of the child element and setting up some default width and height if there are no style has been set to each element. By this way can simulate the exact element to transforming it as loader to show until we getting acknowledgment from parent component.

# Simple example with explanation

```javascript
function Example() {
  let loading = true;
  return (
    <SkeletonLoader isLoading={loading}>
      <children />
      <children />
      <children />
    </SkeletonLoader>
  )
}
```

In above code, we need to pass isLoading prop as mandatory since, that is the holding point to show the data back. It can magically figure out the elements position and its outlined style to showcase it as pulse loader.

# Limitations

1. It can only transform the first level of its children to keep it very simple and stable.
2. Detailed skeleton can be formed only if we provide proper measurement to the skeletons children. If we dont have a proper measurements, it will take default min and max width/height
3. It cannot be able to turn complex in-house custom components into pulse loader. Since its hard to extract the content of it and also we cannot guess how much complex it can be inside.
