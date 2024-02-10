# SUIT CSS

Al igual que BEM tendremos dividos nuestro CSS en forma de elementos y también tendremos modificadores pero SUIT esta basdo en componentes y escrita en PascalCase, en este caso tendriamso componentes en css, los componentes tendrian partes y sus modificadores

```CSS
.MyComponent{

}
```

Y si nuestro componente tiene partes 

```CSS
.MyComponent-part{

}
```

O si tenemos mas partes

```CSS
.MyComponent-anotherPart{

}
```
Como se ve sus partes se diviven con guiones y sus partes se escriben camelCase, osea tendriamos una convinación entre PascalCase y camelCase


Y si sus modificadores

```CSS
.MyComponent-anotherPart--modifier{

}
```

Otra particularidad es que tendremos estados que pueden ser una segunda clase en nuestras etiquetas

```CSS
.is-state{

}
```

Y utilidades que serian clases globales

```CSS
.u-utlity{

}
```