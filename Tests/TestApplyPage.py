from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

def testApplyPage():

    # Start a session   
    driver = webdriver.Chrome(service=ChromeService(executable_path=ChromeDriverManager().install()))

    # Take action on browser
    driver.get("http://localhost:3000/MUNster/jobs/apply")


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
    job_title = driver.find_element(by=By.ID, value="job-title")
    cover_letter_upload_button = driver.find_element(by=By.CSS_SELECTOR, value="cover-letter-upload")
    resume_upload_button = driver.find_element(by=By.CSS_SELECTOR, value="resume-upload")
    next_button = driver.find_element(by=By.CSS_SELECTOR, value="next")
    progress = driver.find_element(by=By.ID, value="progress")
    save_button = driver.find_element(by=By.CSS_SELECTOR, value="save")

    # Test elements
    #
    # common nav bar tests
    find_jobs_button.click()
    find_companies_button.click()
    find_people_button.click()
    post_job_button.click()

    # page specific tests
    cover_letter_upload_button.click()
    resume_upload_button.click()
    next_button.click()
    save_button.click()
    
    driver.quit()