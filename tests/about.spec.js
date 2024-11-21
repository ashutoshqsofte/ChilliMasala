const { test, expect } = require('@playwright/test');

//header about us

test('About Us page loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/about'); 

  const heading = page.locator('.about-us-head'); 
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('About Us');
});

// Header About Us Paragraph

test('Verify paragraph on the About Us page', async ({ page }) => {

    await page.goto('http://localhost:3000/about'); 
  
    
    const paragraph = page.locator('.para-abtus');
  
  
    await expect(paragraph).toBeVisible();
  
    await expect(paragraph).toHaveText('Welcome to a culinary journey through the heart of Italy at Partow Foods Restaurant. Immerse yourself in the rich flavors and warm hospitality that define our authentic Italian dining experience.');
  
    await expect(paragraph).toContainText('Welcome to a culinary journey through the heart of Italy at Partow Foods Restaurant. Immerse yourself in the rich flavors and warm hospitality that define our authentic Italian dining experience.');
  });

  // chef image

  test('Verify About Us page image', async ({ page }) => {
    
    await page.goto('http://localhost:3000/about'); 
  
    const aboutImage = page.locator('.img-about img');  
  
    await expect(aboutImage).toBeVisible();
  
    await expect(aboutImage).toHaveAttribute('src', expect.stringContaining('chefchillim.png'));
  
    await expect(aboutImage).toHaveAttribute('alt', 'chilli masala');
  });

  // header Our Story

  test('Our Story page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/about'); 
  
    const heading = page.locator('.story-us-head'); 
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Our Story');
  });

  // header Our Story Paragraph

  test('Verify paragraph on the Our Story page', async ({ page }) => {
    
    await page.goto('http://localhost:3000/about'); 
  
    const paragraph = page.locator('.para-story'); 
  
    await expect(paragraph).toBeVisible();
    
    await expect(paragraph).toHaveText('Founded with a passion for preserving Italian culinary traditions, Partow Foods Restaurant emerged as a labor of love. Our story is woven with family recipes, generations of expertise, and a commitment to sharing the true essence of Italy.');
  
    await expect(paragraph).toContainText('Founded with a passion for preserving Italian culinary traditions, Partow Foods Restaurant emerged as a labor of love. Our story is woven with family recipes, generations of expertise, and a commitment to sharing the true essence of Italy.');
  });

  // header Our Mission

  test('Our Mission page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/about');
  
    const heading = page.locator('.mission-us-head');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Our Mission');
  });

  // header Our Mission Paragraph

  test('Verify paragraph on the Our Mission page', async ({ page }) => {
    
    await page.goto('http://localhost:3000/about');
  
    const paragraph = page.locator('.para-msn'); 
  
    await expect(paragraph).toBeVisible();
  
    await expect(paragraph).toHaveText('At Chilli Masala, our mission is to transport you to the sun-kissed landscapes of Italy through every bite. We strive to deliver an unparalleled dining experience, where passion meets perfection in crafting memorable moments for our guests.');
  
    await expect(paragraph).toContainText('At Chilli Masala, our mission is to transport you to the sun-kissed landscapes of Italy through every bite. We strive to deliver an unparalleled dining experience, where passion meets perfection in crafting memorable moments for our guests.');
  });

  // header Our Mission image

  test('Verify background-image of About Us section', async ({ page }) => {
  
    await page.goto('http://localhost:3000/about');

    const sectionWithBgImage = page.locator('.img-msn');
    
    await expect(sectionWithBgImage).toHaveCSS(
      'background-image',
      /chillifood.*\.jpg/ 
    );
  });

// header Our Mission color background color

test('Verify background color of About Us page section', async ({ page }) => {
  
  await page.goto('http://localhost:3000/about'); 
  const sectionElement = page.locator('.cntnt-msn');

  await expect(sectionElement).toHaveCSS('background-color', 'rgba(217, 175, 92, 0.6)');
});

// header What Our Client Say 

test('Verify What Our Client Say on the Our Mission page', async ({ page }) => {
  
  await page.goto('http://localhost:3000/about');

  const paragraph = page.locator('.clnt-head');

  await expect(paragraph).toBeVisible();

  await expect(paragraph).toHaveText('What Our Client Say');
});

// header What Our Client Say Paragraph

test('Verify What Our Client Say Paragraph on the Our Mission page', async ({ page }) => {
  
  await page.goto('http://localhost:3000/about');

  const paragraph = page.locator('.para-clnt'); 

  await expect(paragraph).toBeVisible();

  await expect(paragraph).toHaveText("The most amazing curry you're going to find in the Hutt or Wellington. I've been here twice now and the food was literally outstanding. Hands down the best chicken Tikka Masala I've ever had ( and trust me - I've sampled from all around the wellington area & Hutt).");

  await expect(paragraph).toContainText("The most amazing curry you're going to find in the Hutt or Wellington. I've been here twice now and the food was literally outstanding. Hands down the best chicken Tikka Masala I've ever had ( and trust me - I've sampled from all around the wellington area & Hutt).");
 });





