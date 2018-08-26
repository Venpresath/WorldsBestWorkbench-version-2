"use strict"
{
    let about = {
        template: `
    <h1>About Us</h1>
    <div class="about">
    <p>lorem ipsum dolor sit amet</p>
    <p></p> </div>
    `,
        controller: function () {
            let vm = this;
        }
    }
    angular
        .module("app")
        .component("about", about);
}