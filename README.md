# Buttons

Predix Experience Button module is a simple, robust, extensible baseline for building entire suites of buttons onto. This module is a fork of the [inuitcss Buttons module](https://github.com/inuitcss/objects.buttons).

## Dependencies

Px's Buttons module depends on three other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/pxc/px-buttons-design.git

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-buttons-design/objects.buttons";

#### A note about relative @import paths

Paths to a project's Bower dependencies differ depending on whether you are in the project itself (dependencies in some
a Bower managed directory in the project) vs. using the project 'downstream' (dependencies are siblings of the project).
Ideally we want to be able to 'build' in both cases without a lot of magic.

For Sass imports, can use the 'includePaths' option on the Grunt sass task to name a starting point to look for
relative paths. IncludePath 'bower_components/*' in the 'sass' task allows the actual @import paths in Sass files to start
with '../' so that they will resolve in either case described above and make editors happy.

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
