# Linked Lists

## About

Here is an implementation of the **Linked List** data structure in JavaScript including its essential methods and functions.

## Description

The modules (in `src`) contain the following:

- A node() factory, containing a `value` property and a `nextNode` property.
- A linkedList() factory, which represents the full linked list including the following functions:

    - `append(value)` adds a new node containing `value` to the end of the list.
    - `prepend(value)` adds a new node containing `value` to the start of the list.
    - `getSize()` returns the total number of nodes in the list.
    - `getHead()` returns the first node in the list.
    - `getTail()` returns the last node in the list.
    - `at(index)` returns the node at the given `index`.
    - `pop()` removes the last element from the list.
    - `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
    - `find(value)` returns the index of the node containing value, or null if not found.
    - `toString()` represents the `linkedList` objects as strings, so that we can print them out and preview them in the - console. The format is: `( value ) -> ( value ) -> ( value ) -> null`.

## Background

This was done as part of [The Odin Project](https://www.theodinproject.com/)'s [Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists) project.
