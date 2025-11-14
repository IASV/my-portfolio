# Actualización a Node.js 22

Este proyecto ahora requiere Node.js versión 22 o superior.

## Pasos para actualizar

### Usando NVM (Node Version Manager)

1. Instalar o cambiar a Node.js 22:
```bash
nvm install 22
nvm use 22
```

2. Verificar la versión:
```bash
node --version
```

3. Eliminar dependencias antiguas:
```bash
rm -rf node_modules package-lock.json
```

4. Reinstalar dependencias:
```bash
npm install
```

### Sin NVM

1. Descargar e instalar Node.js 22 desde: https://nodejs.org/

2. Verificar la versión:
```bash
node --version
```

3. Eliminar dependencias antiguas:
```bash
rm -rf node_modules package-lock.json
```

4. Reinstalar dependencias:
```bash
npm install
```

## Cambios realizados

- Actualizado `package.json` con engines para Node.js >= 22.0.0
- Creado archivo `.nvmrc` con versión 22
- Actualizado `@tsconfig/node22` y `@types/node` a versión 22
- Actualizado `tsconfig.node.json` para usar configuración de Node.js 22

