from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

def testPostJobPage():

    # Start a session   
    driver = webdriver.Chrome(service=ChromeService(executable_path=ChromeDriverManager().install()))

    # Take action on browser 
    driver.get("http://localhost:3000/MUNster/jobs/post-job")


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
    job_description_textbox = driver.find_element(by=By.ID, value="post-job-details")
    additional_information_textbox = driver.find_element(by=By.ID, value="additional-information")
    applicant_qualifications_textbox = driver.find_element(by=By.ID, value="applicant-qualifications")
    save_changes_button = driver.find_element(by=By.CSS_SELECTOR, value="post-save-changes")
    post_button = driver.find_element(by=By.CSS_SELECTOR, value="post-this-job")


    # Test elements
    #
    # common nav bar tests
    find_jobs_button.click()
    find_companies_button.click()
    find_people_button.click()
    post_job_button.click()

    # page specific tests
    job_description_textbox.send_keys("Test job description")
    additional_information_textbox.send_keys("Test additional information")
    applicant_qualifications_textbox.send_keys("Test applicant qualifications")
    save_changes_button.click()
    post_button.click()

    driver.quit()