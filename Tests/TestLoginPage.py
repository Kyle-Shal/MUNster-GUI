from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

def testLoginPage():

    # Start a session   
    driver = webdriver.Chrome(service=ChromeService(executable_path=ChromeDriverManager().install()))

    # Take action on browser 
    driver.get("http://localhost:3000/MUNster/login")


    # Establish waiting strategy (wait until element exists on page and is interactable before testing)
    driver.implicitly_wait(0.5)

    # Find elements on page
    #
    # common nav bar elements
    find_jobs_button = driver.find_element(by=By.CSS_SELECTOR, value="find-jobs")
    find_companies_button = driver.find_element(by=By.CSS_SELECTOR, value="find-companies")
    find_people_button = driver.find_element(by=By.CSS_SELECTOR, value="find-people")
    post_job_button = driver.find_element(by=By.CSS_SELECTOR, value="post-job")

    # page specific elements
    google_button = driver.find_element(by=By.CSS_SELECTOR, value="google")
    facebook_button = driver.find_element(by=By.CSS_SELECTOR, value="facebook")
    apple_button = driver.find_element(by=By.CSS_SELECTOR, value="apple")
    email_textbox = driver.find_element(by=By.ID, value="email")
    continue_button = driver.find_element(by=By.ID, value="continue")


    # Test elements
    #
    # common nav bar tests
    find_jobs_button.click()
    find_companies_button.click()
    find_people_button.click()
    post_job_button.click()

    # page specific tests
    google_button.click()
    facebook_button.click()
    apple_button.click()
    email_textbox.send_keys("Test email")

    driver.quit()