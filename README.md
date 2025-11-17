# Full Stack Fashion E-Commerce Website

<p>Aura is a full-stack fashion website which allows users to simulate purchasing clothes from popular streetwear brands. The website follows mobile-first principles and a minimalist design.</p> 

![image of header](GitHub-Images/homepage.png)
![image of stow collection](GitHub-Images/stowimage.png)
![image of sora collection](GitHub-Images/soraimage.png)

## Table of Contents
- [Interactive Features](#interactive-features)
  - [Integrated Shopping Cart](#integrated-shopping-cart)
  - [Responsive Design](#responsive-design)
  - [Dynamic Content Retrieval](#dynamic-content-retrieval)
  - [Order Management Page](#order-management-page)
  - [Order Processing](#order-processing)
- [Technologies Used](#technologies-used)
- [How to Install & Run](#how-to-install--run)

## Interactive Features

### Integrated Shopping Cart
<p>Users are able to add items to their cart and maintain their selections across page refreshes (Vuex Persisted State).</p>

<div style="display: flex; justify-content: center;">
    <img src="GitHub-Images/cart1.png" alt="image of full cart" height="500" style="margin-right: 10px;">
    <img src="GitHub-Images/cart2.png" alt="image of empty cart" height="500">
</div>

### Responsive Design
<p>Ensures viewing and interaction on mobile devices, and across various screen sizes (Bootstrap).</p>

<div style="display: flex; justify-content: center;">
    <img src="GitHub-Images/responsive1.png" alt="image of mobile size" height="500" style="margin-right: 10px;">
    <img src="GitHub-Images/responsive2.png" alt="image of desktop size" height="500">
</div>

### Dynamic Content Retrieval
<p>Information is dynamic and fetched from a MySQL database, allowing for changes to product listings and availability (MySQL, Node.js).</p>

<div style="display: flex; justify-content: center;">
    <img src="GitHub-Images/sqldb1.png" alt="image of SQL DB" height="500" style="margin-right: 10px;">
    <img src="GitHub-Images/sqldb2.png" alt="image of collection from database" height="500">
</div>

### Order Management Page
<p>Staff can view and manage customer orders directly from the SQL database, allowing for order tracking.</p>

![image of order page original](GitHub-Images/order1.png)  

![image of order page deleting](GitHub-Images/order2.png)  

![image of order page w/ removed order](GitHub-Images/order3.png)

#### Order Processing
<p>When users complete their purchases, the order details are uploaded to the MySQL database.</p>

<div style="display: flex; justify-content: center;">
    <img src="GitHub-Images/processing1.png" alt="image of order page original" height="200" style="margin-right: 10px;">
    <img src="GitHub-Images/processing2.png" alt="image of order page original" height="200">
</div>

## Technologies Used

<ul>
    <li><strong>Frontend:</strong>
        <ul>
            <li>HTML5: For structuring the web pages.</li>
            <li>CSS3: For styling and layout design.</li>
            <li>JavaScript: Used in conjunction with Vue.js for dynamic content and interactivity.</li>
            <li>Vue.js: For building the user interface with a component-based architecture.</li>
        </ul>
    </li>
    <li><strong>Backend:</strong>
        <ul>
            <li>Node.js: For building server-side applications.</li>
            <li>Express.js: A web application framework for Node.js that simplifies routing and middleware handling.</li>
            <li>MySQL: For managing and storing relational data.</li>
        </ul>
    </li>
    <li><strong>Additional Tools:</strong>
        <ul>
            <li>Axios: For making HTTP requests from the frontend to the backend.</li>
        </ul>
    </li>
</ul>

## How to Install & Run

<ol>
  <li>
    <p>Clone this repository to your local machine:</p>
    <pre><code>git clone https://github.com/sagaKnight/Aura-Webpages.git
cd Aura-Webpages</code></pre>
  </li>

  <li>
    <strong>Create the Environment File</strong>
    <p>In the project root, create a file named <code>.env</code> and add:</p>
    <pre><code>DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=AuraProject
DB_PORT=3306
PORT=3000</code></pre>
    <p>This file is not tracked in Git and must be created manually.</p>
  </li>

  <li>
    <strong>Install Project Dependencies</strong>
    <p>Run the following command:</p>
    <pre><code>npm install</code></pre>
  </li>

  <li>
    <strong>Start the Project</strong>
    <p>This command will automatically:</p>
    <ul>
      <li>Start the Node backend</li>
      <li>Import the SQL database if needed</li>
      <li>Launch the Vite development server</li>
    </ul>
    <pre><code>npm run start</code></pre>
    <p>Example output:</p>
    <pre><code>Connected to database
Database imported successfully (or already exists)
VITE ready at http://localhost:5173/</code></pre>
  </li>

  <li>
    <strong>Open the App</strong>
    <p>Visit the site in your browser:</p>
    <pre><code>http://localhost:5173/</code></pre>
  </li>
</ol>

