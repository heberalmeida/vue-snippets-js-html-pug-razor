# Examples and Test Cases

This directory contains example files and test cases for the Vue 3 + Tailwind + Bootstrap Snippets extension.

## Test Cases

### 1. Vue 3 Component (vbase)

**File:** `test-vbase.vue`

**Test Steps:**
1. Create a new `.vue` file
2. Type `vbase` and press Tab
3. Verify the generated component structure matches the expected output

**Expected Output:**
```vue
<template>
  <div>
    <!-- Your template here -->
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
/* Your styles here */
</style>
```

### 2. Tailwind Button (twbtn)

**Test Steps:**
1. Open any HTML or Vue file
2. Type `twbtn` and press Tab
3. Verify the generated button code

**Expected Output:**
```html
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Button Text
</button>
```

### 3. Bootstrap Modal (bsmodal)

**Test Steps:**
1. Open any HTML or Vue file
2. Type `bsmodal` and press Tab
3. Verify the generated modal structure

### 4. TypeScript Interface (tsinterface)

**Test Steps:**
1. Create a new `.ts` file
2. Type `tsinterface` and press Tab
3. Verify the generated interface structure

**Expected Output:**
```typescript
interface InterfaceName {
  property: string
}
```

### 5. TypeScript Class (tsclass)

**Test Steps:**
1. Create a new `.ts` file
2. Type `tsclass` and press Tab
3. Verify the generated class structure

## Demo Examples

### Vue 3 + Tailwind Demo

**File:** `vue3-tailwind-demo.vue`

A complete example demonstrating:
- Vue 3 Composition API with TypeScript
- Tailwind CSS utility classes
- Reactive state management
- Computed properties
- Event handlers
- Conditional rendering

**Features:**
- Responsive grid layout
- Card components
- Interactive buttons
- Alert component
- Form inputs

### TypeScript Examples

**File:** `typescript-example.ts`

A comprehensive example demonstrating:
- Interface and type definitions
- Generic classes and functions
- Async/await patterns
- Type guards and assertions
- Utility types
- Class with getters and setters
- Error handling

**Features:**
- Type-safe code examples
- Modern TypeScript patterns
- Best practices
- Real-world use cases

## Running the Examples

### Vue 3 + Tailwind Demo

1. Ensure you have Vue 3 and Tailwind CSS installed in your project
2. Copy `vue3-tailwind-demo.vue` to your Vue project
3. Import and use the component:

```vue
<script setup lang="ts">
import Vue3TailwindDemo from './examples/vue3-tailwind-demo.vue'
</script>

<template>
  <Vue3TailwindDemo />
</template>
```

### TypeScript Examples

1. Ensure you have TypeScript installed in your project
2. Copy `typescript-example.ts` to your TypeScript project
3. Import and use the types and classes:

```typescript
import { User, UserRole, UserService } from './examples/typescript-example'

const userService = new UserService()
const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: UserRole.USER,
  createdAt: new Date()
}
userService.addUser(user)
```

### Prerequisites

- Vue 3.x
- TypeScript 4.x+ (for TypeScript examples)
- Tailwind CSS 3.x or 4.x
- Vite or similar build tool

## Testing Checklist

### Vue 3
- [ ] `vbase` - Vue 3 component structure
- [ ] `vref` - Reactive reference
- [ ] `vcomputed` - Computed property
- [ ] `vwatch` - Watch statement
- [ ] `vprops` - Props definition
- [ ] `vemits` - Emits definition

### Tailwind CSS
- [ ] `twbtn` - Tailwind button
- [ ] `twcard` - Tailwind card
- [ ] `twgrid` - Tailwind grid

### Bootstrap
- [ ] `bsbtn` - Bootstrap button
- [ ] `bsmodal` - Bootstrap modal
- [ ] `bsform` - Bootstrap form

### HTML/Pug/Razor
- [ ] `html5` - HTML5 document
- [ ] `pughtml5` - Pug HTML5 document
- [ ] `razorpage` - Razor page

### TypeScript
- [ ] `tsinterface` - Interface definition
- [ ] `tsclass` - Class definition
- [ ] `tsfunction` - Function definition
- [ ] `tsasync` - Async function
- [ ] `tstype` - Type alias
- [ ] `tsenum` - Enum definition
- [ ] `tsgeneric-function` - Generic function
- [ ] `tspartial` - Partial utility type
- [ ] `tspick` - Pick utility type
- [ ] `tsomit` - Omit utility type

## Contributing Test Cases

If you'd like to add more test cases or examples:

1. Create a new file in this directory
2. Follow the naming convention: `test-<snippet-name>.<ext>` or `demo-<description>.<ext>`
3. Include clear instructions and expected output
4. Submit a pull request

