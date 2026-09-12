# Dev Stack Builder

## Project Description

**Dev Stack Builder** is a responsive web application where developers can explore different technologies and build their own development stack. Users can view technology details, add technologies to their stack, and easily remove them when needed.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* React Icons
* Vite
* JSON

## 3 Key Features

### 1. Explore Technologies

Users can explore different development technologies with their name, icon, category, description, difficulty level, rating, and badge.

### 2. Build Your Own Stack

Users can add technologies to their personal stack. The same technology cannot be added twice. Users can also remove individual technologies or remove all technologies at once.

### 3. Responsive & Interactive Design

The website is responsive for desktop, tablet, and mobile devices. Toast notifications are shown when technologies are added, removed, or when duplicate actions are attempted.

---

#  React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the UI should look like in an easy and readable way.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

For example, in this project, technology information is passed as props, while the selected technologies are managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

I used it in this project to store the technologies selected by the user:

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<Technology[]>([]);
```

When a technology is added or removed, the state is updated and the UI changes automatically.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders. It is commonly used for side effects such as fetching data.

It can be used to fetch the technology data from a JSON file when the component loads.

Example:

```tsx
useEffect(() => {
  fetch("/technologies.json")
    .then((res) => res.json())
    .then((data) => setTechnologies(data));
}, []);
```

The empty dependency array makes the effect run once when the component loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item has changed, been added, or removed.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here, `technology.id` is unique, so it is used as the key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in the **Your Stack** section. When there are no selected technologies, an empty stack message is shown.

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

If the stack is empty, the message is displayed. Otherwise, the selected technologies are displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child using **props**.

For example:

```tsx
<TechnologyCard
  technology={technology}
  onAddToStack={handleAddToStack}
/>
```

Here, `technology` and `onAddToStack` are passed from the parent to the child.

The child can send something back by calling a function received through props.

For example:

```tsx
<button onClick={() => onAddToStack(technology)}>
  Add to Stack
</button>
```

So, the parent passes a function to the child, and the child calls that function to send data or trigger an action in the parent.

---

## 🔗 Links

### Live Website

YOUR_LIVE_LINK_HERE

### GitHub Repository

[(https://github.com/shourikhoqueshommridho/my-assignment-05.git)
]
---

## 👨‍💻 Author

Developed as part of **Programming Hero Assignment 5**.

**Dev Stack Builder** — Explore technologies and build your perfect development stack.
