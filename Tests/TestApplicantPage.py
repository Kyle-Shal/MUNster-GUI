from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

def testApplicantsPage():

    # Start a session   
    driver = webdriver.Chrome(service=ChromeService(executable_path=ChromeDriverManager().install()))

    # Take action on browser
    driver.get("http://localhost:3000/MUNster/jobs/applicants")


    # Establish waiting strategy (wait until element exists on page and is interactable before testing)
    driver.implicitly_wait(0.5)

    # Find elements on page
    #
    # common nav bar elements
    find_logo_button = driver.find_element(by=By.ID, value="logo")
    find_jobs_button = driver.find_element(by=By.ID, value="jobs")
    #find_companies_button = driver.find_element(by=By.CSS_SELECTOR, value="find-companies")
    find_people_button = driver.find_element(by=By.ID, value="people")
    post_job_button = driver.find_element(by=By.ID, value="post-job")
    find_applicants_button = driver.find_element(by=By.ID, value="applicants")

    # page specific elements
    applicant_search_box = driver.find_element(by=By.ID, value="search-applicants")
    #search_button = driver.find_element(by=By.CSS_SELECTOR, value="search-posting-button")

    # add elements for jobs once implemented

    # Test elements
    #
    # common nav bar tests
    find_logo_button.click()
    find_jobs_button.click()
    #find_companies_button.click()
    find_people_button.click()
    post_job_button.click()
    find_applicants_button.click()

    # page specific tests
    applicant_search_box.send_keys("Test Applicant Search")
    #search_button.click()

    driver.quit()