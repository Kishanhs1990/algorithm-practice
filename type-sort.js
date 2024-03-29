// You have an array of filenames with extensions. Sort the files into arrays based on whether they're videos or images.

var files = ["pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
];

function sortFiles(arr) {
    let movies = [];
    let images = [];
    let sorted = [];

    // loop through entire array
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].substr(-3));

        // if ending with .mov .mp4 . avi .gif
        if (arr[i].substr(-3) === "mov" || arr[i].substr(-3) === "mp4" || arr[i].substr(-3) === "avi" || arr[i].substr(-3) === "gif") {
            // add to movies array  
            movies.push(arr[i]);
        } else {

            // add to images array
            images.push(arr[i]);

        }
    }

    // combine two arrays

    sorted = images.concat(movies);
    console.log(sorted);
    return sorted
}

sortFiles(files);