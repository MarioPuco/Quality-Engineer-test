// @ts-check
import {test, expect} from '@playwright/test'; 

const baseUrl = "https://reqres.in" 

test('List Users API Call', async ({request}) => {
    const response = await request.get(`${baseUrl}/api/users?page=2`);
    // Validate status is correct
    expect(response.status()).toBe(200);
    // Extract the response body as text and console.log it
    const responseBody = JSON.parse(await response.text())
    console.log(responseBody);
});

test('Create user API Call', async ({request}) => {
    const response = await request.post(`${baseUrl}/api/users`, {
        data: {
            name: "Mario",
            job: "Quality Assurance",
            id: 1001,
        },
    })
    // Extract the response body as text and validate name, job, id and status is correct.
    const responseBody = JSON.parse(await response.text())
    
    expect(responseBody.name).toBe("Mario");
    expect(responseBody.job).toBe("Quality Assurance");
    expect(responseBody.id).toBe(1001);
    expect(response.status()).toBe(201);
});

test('Update API Call', async ({request}) => {
    const response = await request.put(`${baseUrl}/api/users/2`,{
    data: {
        name: "Mark",
        job: "Writer"
    },
});
    // Extract the response body as text and validate name, job, UpdatedAt and status is correct.
    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe("Mark");
    expect(responseBody.job).toBe("Writer");
    expect(responseBody.updatedAt).toBeTruthy();
});