import { http } from "./module.js";
let data = http
JSON.parse(localStorage.getItem('todos'))

let today = document.querySelector('.today')
let tomorrow = document.querySelector('.tomorrow')
let later = document.querySelector('.later')

let arr_today = []
let arr_tomorrow = []
let arr_later = []

let today_length = document.querySelector('.today_length')
let tomorrow_length = document.querySelector('.tomorrow_length')
let later_length = document.querySelector('.later_length')

let all_tasks = document.querySelector('.all_tasks')



function reload(arr) {
    localStorage.setItem('todos', JSON.stringify(arr))
    tomorrow.innerHTML = ""
    today.innerHTML = ""
    later.innerHTML = ""
    for(let item of arr) {
        all_tasks.innerHTML = arr.length
        let box = document.createElement('div')
        let box_left = document.createElement('div')
        let box_right = document.createElement('div')
        let input = document.createElement('input')
        let p = document.createElement('p')
        let span = document.createElement('span')
        let span1 = document.createElement('span')

        box.setAttribute('data-on', item.completed)
        input.setAttribute('type', 'checkbox')
        box.classList.add('box')
        box_left.classList.add('box_left')
        box_right.classList.add('box_right')
        p.classList.add('p')
        span.classList.add('span')
        span1.classList.add('span1')
        
        p.innerHTML = 'Buy S Plaid!'
        span.innerHTML = item.title

        
        if(item.completed === true) {
            input.checked = true
        } else {
            input.checked = false
        }

        let status = item.completed

        input.onchange = () => {
            if(status === true) {
                input.checked = true 
                localStorage.setItem('todos', JSON.stringify(arr))
            }
        }


        if(item.left < 1) {
            arr_today.push(item)
            today.append(box)
            today_length.innerHTML = arr_today.length
            span1.innerHTML = "Today"
        }
        
        if(item.left >= 1 && item.left <= 10) {
            arr_tomorrow.push(item)
            tomorrow.append(box)
            tomorrow_length.innerHTML = arr_tomorrow.length
            span1.innerHTML = "Tomorrow"
        }

        if(item.left > 10) {
            arr_later.push(item)
            later.append(box)
            later_length.innerHTML = arr_later.length
            span1.innerHTML = "Later"
        }
        

        box.append(box_left, box_right)
        box_left.append(input)
        box_right.append(p, span, span1)
    }
}

reload(data)