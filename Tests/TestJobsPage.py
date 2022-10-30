from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

def testJobsPage():

    # Start a session   
    driver = webdriver.Chrome(service=ChromeService(executable_path=ChromeDriverManager().install()))

    # Take action on browser
    driver.get("http://localhost:3000/MUNster/jobs")


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
    keyword_search_box = driver.find_element(by=By.NAME, value="keyword-search")
    location_search_box = driver.find_element(by=By.NAME, value="location-search")
    search_button = driver.find_element(by=By.CSS_SELECTOR, value="search")

    # add elements for posted jobs once implemented

    # Test elements
    #
    # common nav bar tests
    find_jobs_button.click()
    find_companies_button.click()
    find_people_button.click()
    post_job_button.click()

    # page specific tests
    keyword_search_box.send_keys("Test keyword search")
    location_search_box.send_keys("Test location search")
    search_button.click()

    # add tests for posted jobs once implemented


    driver.quit()
