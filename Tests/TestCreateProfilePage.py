from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

def testCreateProfilePage():

    # Start a session   
    driver = webdriver.Chrome(service=ChromeService(executable_path=ChromeDriverManager().install()))

    # Take action on browser
    driver.get("http://localhost:3000/MUNster/create-profile")

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
    first_name_textbox = driver.find_element(by=By.ID, value="first-name")
    last_name_textbox = driver.find_element(by=By.ID, value="last-name")
    address_line1_textbox = driver.find_element(by=By.ID, value="address1")
    address_line2_textbox = driver.find_element(by=By.ID, value="address2")
    province_state_textbox = driver.find_element(by=By.ID, value="province-state")
    country_textbox = driver.find_element(by=By.ID, value="country")

    job_plus_button = driver.find_element(by=By.CSS_SELECTOR, value="job-plus")
    company_name_textbox = driver.find_element(by=By.ID, value="company-name")
    start_date_textbox = driver.find_element(by=By.ID, value="start-date")
    end_date_textbox = driver.find_element(by=By.ID, value="end-date")
    work_details_textbox = driver.find_element(by=By.ID, value="work-details")

    # Test elements
    #
    # common nav bar tests
    find_jobs_button.click()
    find_companies_button.click()
    find_people_button.click()
    post_job_button.click()

    # page specific tests
    job_plus_button.click()

    driver.quit()