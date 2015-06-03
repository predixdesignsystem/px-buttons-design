# Buttons

Predix Experience Button module is a simple, robust, extensible baseline for building entire suites of buttons onto. This module is a fork of the [inuitcss Buttons module](https://github.com/inuitcss/objects.buttons).

## Demo

You can review button styles and recommended markup and required here: https://github.build.ge.com/pages/PXd/px-buttons-design

## Sass Documentation

You can review Sass Documentation here: https://github.build.ge.com/pages/PXd/px-buttons-design/sassdoc

## Dependencies

Px's Buttons module depends on three other Px and inuitcss modules:

* [px-colors-design](https://github.build.ge.com/PXd/px-colors-design)
* [px-defaults-design](https://github.build.ge.com/PXd/px-defaults-design)

## Upstream dependency

The Buttons module is also an upstream dependency in this meta kit:

* [px-meta-buttons-design](https://github.build.ge.com/PXd/px-meta-buttons-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.build.ge.com/PXd/px-buttons-design.git

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-buttons-design/objects.buttons";

See [px-getting-started](https://github.build.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('objects.buttons') { ... }

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-btn--small
    $inuit-enable-btn--large
    $inuit-enable-btn--full
    $inuit-enable-btn--primary
    $inuit-enable-btn--bare
    $inuit-enable-btn--tertiary
    $inuit-enable-btn--disabled
    $inuit-enable-btn--cta
    $inuit-enable-btn--icon

The following variables are available for use in the module:

    $inuit-btn-color
    $inuit-btn-background
    $inuit-btn-background--hover
    $inuit-btn-background--pressed
    $inuit-btn-border-color
    $inuit-btn-border-color--hover
    $inuit-btn-border-color--pressed
    $inuit-btn-shadow
    $inuit-btn-shadow--light
    $inuit-btn-primary-color
    $inuit-btn-primary-background
    $inuit-btn-primary-background--hover
    $inuit-btn-primary-background--pressed
    $inuit-btn-primary-border-color
    $inuit-btn-tertiary-color
    $inuit-btn-tertiary-background
    $inuit-btn-tertiary-background--hover
    $inuit-btn-tertiary-background--pressed
    $inuit-btn-disabled-color
    $inuit-btn-disabled-background
    $inuit-btn-disabled-border-color

## Options

These classes are available if the variable flags listed above are set to `true`:

* `btn--[small|large|cta]`: Small, large or CTA buttons
* `btn--[primary|tertiary|disabled]`: Primary, tertiary, or disabled buttons
* `btn--full`: Full width buttons
* `btn--icon`: Button with icon
