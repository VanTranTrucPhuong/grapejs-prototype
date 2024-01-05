import React, { Component } from "react";
import grapesjs from "grapesjs";
import thePlugin from "grapesjs-plugin-export";
import plugin from "grapesjs-preset-webpage";
import basic from "grapesjs-blocks-basic";
import styleBG from "grapesjs-style-bg";

/* eslint-disable */
class Container extends Component {
  componentDidMount() {
    const html = `<button id="widget_id_MC44OTI2OTQ2MDg3NjQ0MDY1" data-link-uploader="https://uploadqa.entribe.com/gallery" data-close-outside="1" class="custom_widget">
        Upload Here
      </button><button onclick="widgetUploader.popup('widget_id_MC44OTI2OTQ2MDg3NjQ0MDY1')" id="widget_id_MC44OTI2OTQ2MDg3NjQ0MDY1-2" data-link-uploader="https://uploadqa.entribe.com/gallery" data-close-outside="1" class="custom_widget">Upload Here</button>
`;
    var editor = grapesjs.init({
      container: "#gjs",
      plugins: [basic, thePlugin],
      forceClass: false,
      storageManager: false,
      canvas: {
        scripts: ["https://uploadqa-tag.entribe.com/uploader_widget.js"],
      },
    });

    editor.onReady(() => {});

    // const projectData = localStorage.getItem('item');
    // editor.loadProjectData(JSON.parse(projectData));

    editor.Panels.addButton("options", [
      {
        id: "save",
        className: "fa fa-floppy-o icon-blank",
        command: "gjs-export-zip",
        attributes: { title: "Save Template" },
      },
    ]);

    editor.BlockManager.add("upload-widget", {
      label: "Uploader widget",
      media: `<img style="width: 32px; height: 32px; filter: invert(0.75); pointer-events: none;" src='https://www.svgrepo.com/show/368574/button.svg' />`,
      content: `<button data-gjs-type="button" id="widget_id_MC44OTI2OTQ2MDg3NjQ0MDY1" data-link-uploader="https://uploadqa.entribe.com/gallery" data-close-outside="1" >Upload Here</button>`,
    });

    editor.BlockManager.add("gallery", {
      label: "Gallery",
      media: `<img style="width: 32px; height: 32px; filter: invert(0.75); pointer-events: none;" src='https://www.svgrepo.com/show/530572/accelerate.svg' />`,
      content: `<iframe scrolling="no" frameborder="0" src="https://galleryqa.entribe.com?cl=595&gid=15" height="625px" width="100%" title="Widget Uploader Gallery"></iframe>`,
    });

    editor.DomComponents.addType("button", {
      model: {
        defaults: {
          testprop: 1,
          attributes: {
            class: "custom_widget",
            onclick:
              "widgetUploader.popup('widget_id_MC44OTI2OTQ2MDg3NjQ0MDY1')",
          },
        },
      },
      view: {
        init() {
          console.log("Local hook: view.init");
        },
        onRender() {
          console.log("Local hook: view.onRender");
        },
      },
    });
  }
  render() {
    return (
      <>
        <div id="gjs"></div>
      </>
    );
  }
}

export default Container;
