# Buttons

Predix Experience Button module is a simple, robust, extensible baseline for building entire suites of buttons onto. This module is a fork of the [inuitcss Buttons module](https://github.com/inuitcss/objects.buttons).

## Demo

You can review button styles and recommended markup and required here: https://github.sw.ge.com/pages/PXd/px-buttons-design

## Dependencies

Px's Buttons module depends on three other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [px-functions-design](https://github.sw.ge.com/PXd/px-functions-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/PXd/px-buttons-design.git

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-buttons-design/objects.buttons";

See [px-getting-started](https://github.sw.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('objects.buttons') { ... }

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-btn--small
    $inuit-enable-btn--large
    $inuit-enable-btn--full
    $inuit-enable-btn--pill

The following variables are available for use in the module:

    $inuit-btn-background
    $inuit-btn-color
    $inuit-btn-border-width
    $inuit-btn-border-style
    $inuit-btn-border-color
    $inuit-btn-radius

The following dimension (padding) variables can be customized:

    $inuit-btn-padding
    $inuit-btn-padding--small
    $inuit-btn-padding--large

## Options

These classes are available if the variable flags listed above are set to `true`:

* `btn--[small|large]`: Small or large buttons
* `btn--full`: Full width buttons
* `btn--pill`: Round-ended buttons
