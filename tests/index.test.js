'use strict';

const app = require('./../app');
const { expect } = require('chai');
const request = require('supertest');

const urlInput = 'https://www.google.com/search?q=google';
let shortenedUrl;
describe('Test shorten URL /', () => {

    it('No URL input', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.own.property('message');
    });

    it('URL input as body', async () => {
        const res = await request(app).post('/').send({ url: urlInput });
        shortenedUrl = res.body.result;
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.own.property('result');
    });

    it('Same input again to get same response', async () => {
        const res = await request(app).post('/').send({ url: urlInput });
        expect(res.statusCode).to.equal(200);
        expect(res.body.result).to.equal(shortenedUrl);
    });
});


