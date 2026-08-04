export default function PriorityBadge({priority}){

let style="";

if(priority==="High"){
style="bg-red-100 text-red-700";
}

else if(priority==="Normal"){
style="bg-blue-100 text-blue-700";
}

else{
style="bg-gray-100 text-gray-700";
}


return (

<span
className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${style}
`}
>
{priority}
</span>

)

}