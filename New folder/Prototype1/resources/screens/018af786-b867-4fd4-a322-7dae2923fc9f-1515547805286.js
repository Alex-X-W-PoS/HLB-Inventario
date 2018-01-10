jQuery("#simulation")
  .on("click", ".s-018af786-b867-4fd4-a322-7dae2923fc9f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ed52a59b-d351-4751-9a7d-4c4fb8bda1d0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-018af786-b867-4fd4-a322-7dae2923fc9f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_58") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_58": {
                      "attributes": {
                        "opacity": "0.89"
                      }
                    }
                  },{
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_58": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=89)",
                        "filter": "alpha(opacity=89)"
                      }
                    }
                  },{
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_58": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=89)",
                        "filter": "alpha(opacity=89)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_40") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_40": {
                      "attributes": {
                        "background-color": "#F5F5F5",
                        "background-image": "none",
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_40 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_40 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_40": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_41") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_41": {
                      "attributes": {
                        "background-color": "#F5F5F5",
                        "background-image": "none",
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_41 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_41 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-018af786-b867-4fd4-a322-7dae2923fc9f #s-Label_41": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-018af786-b867-4fd4-a322-7dae2923fc9f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_58")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_40")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_41")) {
      jEvent.undoCases(jFirer);
    }
  });