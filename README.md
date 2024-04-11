# React


documentation on every file 

### 1 . products.jsx -- Modifing State


### 2 .  product.jsx -- child components and passing props and children
props are read-only data
1-pass props like 
```
<Product product={proObj}/>
```

2-pass child element like 
```
<Product>
  <h4>kareem</h4>
</Product>
```

recieve props and children as param in the function
```
export default function Product({ product , children })
```

recieve custom events in the child componenet
```
export default function Product({ product , children , onDelete })
```

Raising an event from child to parent
```
onClick={ () => onDelete(product)}
```

from parent 

```
let deleteHandler = (product) => {
    
}

<Product onDelete={deleteHandler}/>
```
#   f i r s t - r e a c t  
 