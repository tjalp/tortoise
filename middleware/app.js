
export function setTitle(title) {
    if (title == null) document.title = "tortoise";
    else document.title = "tortoise | " + title;
}