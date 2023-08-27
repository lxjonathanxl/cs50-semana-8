function add_review(id_name, id_photo, id_job, id_review)
{
    let name = document.getElementById(id_name).value;
    let photo = document.getElementById(id_photo).value;
    let job = document.getElementById(id_job).value;
    let review = document.getElementById(id_review).value;

    document.getElementById("name").textContent = name;
    document.getElementById("job").textContent = job;
    document.getElementById("profile").setAttribute('src', photo);
    document.getElementById("user-test").textContent = review;
}

function grow_image(img)
{
    img.style = "box-shadow: 6px 6px 6px black; transform: scale(1.1) translate(-10%, 0%);";
}

function original_image(img)
{
    img.style = "box-shadow: none; transform: scale(1) translate(0%, 0%);";
}