<template>
    <div>
        <body>
            <form action="/login" method="POST">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="id" name="id" class="form-control" placeholder="ID" required="required"/>
                        <label for='id' class="sr-only">ID</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" name="password" type="password" class="form-control" placeholder="Password" required="required"/>
                        <label for="password" class="sr-only">Password</label>
                    </div>
                </div>
                <input class="btn" type="submit" value="로그인"/>
            </form>
        </body>
    </div>
</template>

<script>
export default {

}
</script>

