"use strict"
{
    let contact = {
        template: `
    <h1>Contact Us</h1>
    <div class="contact">
    <p>Want some custom work? Call or email us!</p>
    <h2>World's Best Workbench</h2>
    <p>Phone:</p> 
    <p>Email:</p>
    </div>
    `,
        controller: function () {
            let vm = this;
        }
    }
    angular
        .module("app")
        .component("contact", contact);
}