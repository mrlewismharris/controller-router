module.exports = {
    Test: () => {
        return `This is a test page!<br><br>
        Click <a id="ajaxButton" href="#">here</a> to load some ajax!<br><br><div id="ajaxResult"></div>
        <script>
        document.getElementById("ajaxButton").addEventListener("click", async function() {
            let res = await fetch("/Test/ApiCall")
            if (res.ok) {
                let json = await res.json()
                document.getElementById("ajaxResult").innerHTML = json.message
            } else {
                alert("Fetch Error!")
            }
        })
        </script>`
    },
    ApiCall: () => {
        return { message: `Server datetime is: ${new Date()}` }
    }
}