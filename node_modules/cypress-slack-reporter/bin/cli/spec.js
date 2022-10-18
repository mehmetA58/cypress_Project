#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-reference
/// <reference path='../../node_modules/cypress/types/cypress-npm-api.d.ts'/>
const CypressNpmApi = require("cypress");
const slack_alert_1 = require("../slack/slack-alert");
// tslint:disable: no-var-requires
const marge = require("mochawesome-report-generator");
const { merge } = require("mochawesome-merge");
const del = require("del");
// tslint:disable: no-var-requires
CypressNpmApi.run({
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        reporterEnabled: "mocha-junit-reporter, mochawesome",
        mochaJunitReporterReporterOptions: {
            mochaFile: "cypress/reports/junit/test_results[hash].xml",
            toConsole: false,
        },
        mochawesomeReporterOptions: {
            reportDir: "cypress/reports/mocha",
            quiet: true,
            overwrite: false,
            html: false,
            json: true,
        },
    },
})
    .then(async (results) => {
    const generatedReport = await Promise.resolve(generateReport({
        files: ["cypress/reports/mocha/*.json"],
        inline: true,
        saveJson: true,
    }));
    // tslint:disable-next-line: no-console
    console.log("Merged report available here:-", generatedReport);
    return generatedReport;
})
    .then(async (delFiles) => {
    await del(["cypress/reports/mocha/mochawesome_*.json"]);
})
    .then((generatedReport) => {
    const program = {
        ciProvider: "circleci",
        videoDir: `cypress/videos`,
        vcsProvider: "github",
        screenshotDir: `cypress/screenshots`,
        verbose: true,
        reportDir: `mochawesome-report`,
    };
    const ciProvider = program.ciProvider;
    const vcsRoot = program.vcsProvider;
    const reportDir = program.reportDir;
    const videoDir = program.videoDir;
    const screenshotDir = program.screenshotDir;
    const verbose = program.verbose;
    // tslint:disable-next-line: no-console
    console.log("Constructing Slack message with the following options", {
        ciProvider,
        vcsRoot,
        reportDir,
        videoDir,
        screenshotDir,
        verbose,
    });
    slack_alert_1.slackRunner({
        ciProvider,
        vcsRoot,
        reportDir,
        videoDir,
        screenshotDir,
    });
    // tslint:disable-next-line: no-console
    console.log("Finished slack upload");
})
    .catch((err) => {
    // tslint:disable-next-line: no-console
    console.log(err);
});
function generateReport(options) {
    return merge(options).then((report) => marge.create(report, options));
}
