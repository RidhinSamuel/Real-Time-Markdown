let textArea=document.getElementById("text-area");
let markdown=document.getElementById("markdown");
// console.log(textArea);
// console.log(markdown);
textArea.addEventListener('input', async ()=>{
    let text=textArea.value;
    const response=await fetch('/convert',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text:text})
    });
    const data = await response.json();
    markdown.innerHTML=data.htmlMarkdown;
});