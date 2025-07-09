# 🛠️ Guía de Contribución – Proyecto Final

¡Gracias por colaborar en este proyecto! Para que todo fluya y el código no se vuelva un caos, seguimos este estándar de trabajo.

---

## 🗂️ Estructura del Proyecto

* `apps/api` → Backend (Express)
* `apps/admin` → Panel de administración (React)
* `apps/client` → E-commerce público (Angular)

---

## 🚀 Flujo de trabajo

1. **Crea una rama para cada funcionalidad o cambio**

```bash
git checkout -b feature/nombre-claro
```

2. **Tipos de ramas**

   * `feature/login-admin`: Nueva funcionalidad
   * `fix/token-bug`: Corrección de errores
   * `docs/actualizar-readme`: Cambios en documentación
   * `refactor/limpiar-servicios`: Refactor sin cambiar comportamiento

3. **Commits con convención clara (Conventional Commits)**

Formato:

```
<tipo>: descripción clara
```

Tipos válidos:

* `feat`: Nueva funcionalidad
* `fix`: Corrección de errores
* `refactor`: Mejora interna sin cambiar la lógica
* `docs`: Cambios en la documentación
* `style`: Formato, indentación, comas, etc. (sin lógica)
* `test`: Agregado o mejora de pruebas
* `chore`: Configs o tareas menores

Ejemplos:

* `feat: agregar registro de usuarios en admin`
* `fix: corregir validación de login en API`
* `docs: agregar guía de instalación en README`

---

## 🔀 Pull Requests

* PR desde tu rama hacia `main` o `dev` (según se defina)
* Título claro: `feat: implementar carrito en cliente Angular`
* Descripción debe incluir:

  * ✅ Qué se hizo
  * 🧪 Cómo probarlo
  * 📁 Qué archivos se tocaron

---

<!-- ## 🧹 Linting por Proyecto

* Cada app (`admin`, `api`, `client`) tiene su propio `.eslintrc`
* Instala **solo los plugins necesarios** en cada uno
* Corre el linter antes de cada commit:

```bash
# Desde la carpeta correspondiente
pnpm lint
# o
npm run lint
```

Angular usa `ng lint`, asegúrate de respetar su configuración.

--- -->

## ✅ Buenas prácticas

* Escribe código claro y comenta si es necesario
<!-- * Usa `.env` para datos sensibles (no se suben al repo) -->
* Evita subir archivos generados o innecesarios (`node_modules`, `dist`, etc.)
<!-- * Si un proyecto es complejo, crea su propio `README.md` -->

---

## 🎯 Objetivo

Código limpio, ordenado, fácil de entender y mantener. Un repo que te dé gusto abrir.
