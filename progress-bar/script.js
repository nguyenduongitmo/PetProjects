const prevBtn =document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressFill = document.querySelector('.progress-fill');
const steps = document.querySelectorAll('.circle');

let currStep = 1;

const totalSteps = steps.length;

function update() {
    // Cập nhật class active cho các bước
    steps.forEach((step, index) => {
        if (index < currStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    })

    // Cập nhật trạng thái nút bấm
    if (currStep === 1) { prevBtn.disabled = true} 
    else {prevBtn.disabled = false}
    
    if (currStep === totalSteps) {nextBtn.disabled = true} 
    else {nextBtn.disabled = false}

    // Cập nhật độ rộng của thanh tiến trình
    const percent = ((currStep - 1) / (totalSteps - 1)) * 100;
    progressFill.style.width = `${percent}%`;
}


prevBtn.addEventListener('click', () => {
    if (currStep > 1) {currStep--;
        update();}
});

nextBtn.addEventListener('click', () => {
    if (currStep < totalSteps) {currStep++;
        update();}
});

update();

