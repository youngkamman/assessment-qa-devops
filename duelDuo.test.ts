
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test(' seeing if the draw button shows up on the page ', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    const displayed = await drawButton.isDisplayed()
    
    expect(displayed).toBe(true)
    
    await driver.sleep(2000)
})

test(' seeing if the draw button can be clicked ', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    
    
   await drawButton.click()
    
    await driver.sleep(2000)
})

