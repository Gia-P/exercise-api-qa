$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/game.feature");
formatter.feature({
  "line": 2,
  "name": "Functional Tests",
  "description": "",
  "id": "functional-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@unit"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@functional"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Functional Tests JUnit",
  "description": "",
  "id": "functional-tests;functional-tests-junit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@functional-Unit"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter \u003cgameName\u003e test",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify text",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "functional-tests;functional-tests-junit;",
  "rows": [
    {
      "cells": [
        "gameName"
      ],
      "line": 9,
      "id": "functional-tests;functional-tests-junit;;1"
    },
    {
      "cells": [
        "Chess"
      ],
      "line": 10,
      "id": "functional-tests;functional-tests-junit;;2"
    },
    {
      "cells": [
        "Basket Bool"
      ],
      "line": 11,
      "id": "functional-tests;functional-tests-junit;;3"
    },
    {
      "cells": [
        "Football"
      ],
      "line": 12,
      "id": "functional-tests;functional-tests-junit;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Functional Tests JUnit",
  "description": "",
  "id": "functional-tests;functional-tests-junit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@functional-Unit"
    },
    {
      "line": 1,
      "name": "@unit"
    },
    {
      "line": 1,
      "name": "@functional"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter Chess test",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chess",
      "offset": 8
    }
  ],
  "location": "gameSD.enterGameName(String)"
});
formatter.result({
  "duration": 401817580,
  "status": "passed"
});
formatter.match({
  "location": "gameSD.verifyText()"
});
formatter.result({
  "duration": 8344481,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Functional Tests JUnit",
  "description": "",
  "id": "functional-tests;functional-tests-junit;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@functional-Unit"
    },
    {
      "line": 1,
      "name": "@unit"
    },
    {
      "line": 1,
      "name": "@functional"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter Basket Bool test",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Basket Bool",
      "offset": 8
    }
  ],
  "location": "gameSD.enterGameName(String)"
});
formatter.result({
  "duration": 355564,
  "status": "passed"
});
formatter.match({
  "location": "gameSD.verifyText()"
});
formatter.result({
  "duration": 491789,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Functional Tests JUnit",
  "description": "",
  "id": "functional-tests;functional-tests-junit;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@functional-Unit"
    },
    {
      "line": 1,
      "name": "@unit"
    },
    {
      "line": 1,
      "name": "@functional"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter Football test",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Football",
      "offset": 8
    }
  ],
  "location": "gameSD.enterGameName(String)"
});
formatter.result({
  "duration": 484202,
  "status": "passed"
});
formatter.match({
  "location": "gameSD.verifyText()"
});
formatter.result({
  "duration": 182697,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Functional Tests JUnit Check ID",
  "description": "",
  "id": "functional-tests;functional-tests-junit-check-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@functional-Unit-CheckID"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I verify enter ID 30 times",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 18
    }
  ],
  "location": "gameSD.checkID(String)"
});
formatter.result({
  "duration": 14214765,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Functional Tests JUnit Failure",
  "description": "",
  "id": "functional-tests;functional-tests-junit-failure",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@functional-Unit-Failure"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I Test Failure text",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify Failure text",
  "keyword": "Then "
});
formatter.match({
  "location": "gameSD.testFailureText()"
});
formatter.result({
  "duration": 417992,
  "status": "passed"
});
formatter.match({
  "location": "gameSD.verifyFailureText()"
});
formatter.result({
  "duration": 19052553,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Functional Tests JUnit blank",
  "description": "",
  "id": "functional-tests;functional-tests-junit-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@functional-Unit-blank"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Test blank text",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify text",
  "keyword": "Then "
});
formatter.match({
  "location": "gameSD.enterBlank()"
});
formatter.result({
  "duration": 328894,
  "status": "passed"
});
formatter.match({
  "location": "gameSD.verifyText()"
});
formatter.result({
  "duration": 949526,
  "error_message": "java.lang.AssertionError: expected [Playing Sudoku is fun!] but found [Playing  is fun!]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\n\tat org.testng.Assert.assertEquals(Assert.java:125)\n\tat org.testng.Assert.assertEquals(Assert.java:178)\n\tat org.testng.Assert.assertEquals(Assert.java:188)\n\tat stepdefinition.gameSD.verifyText(gameSD.java:23)\n\tat ✽.Then I verify text(features/game.feature:26)\n",
  "status": "failed"
});
});