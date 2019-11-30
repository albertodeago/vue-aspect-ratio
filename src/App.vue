<template>
  <div id="app">
    <h1>Vue Aspect Ratio</h1>

    <div class="container">
      <div class="example-wrapper">
        <div class="code">
          <pre>
            <code>
&lt;div style=&quot;width: 200px&quot;&gt;
  &lt;vue-aspect-ratio&gt;
    &lt;div&gt;
      &lt;div&gt;Default&lt;/div&gt;
      &lt;div&gt;No aspect ratio&lt;/div&gt;
      &lt;div&gt;No width&lt;/div&gt;
    &lt;/div&gt;
  &lt;/vue-aspect-ratio&gt;
&lt;/div&gt;
            </code>
          </pre>
        </div>
        <div class="example">
          <div class="wrapper vue-ar1">
            <vue-aspect-ratio>
              <div class="content content-1">
                <div>Default</div>
                <div>No aspect ratio</div>
                <div>No width</div>
              </div>
            </vue-aspect-ratio>
          </div>
        </div>
      </div>
      
      <div class="example-wrapper">
        <div class="code">
          <pre>
            <code>
&lt;div&gt;
  &lt;vue-aspect-ratio width=&quot;150px&quot;&gt;
    &lt;div&gt;
      &lt;div&gt;Width 150px&lt;/div&gt;
    &lt;/div&gt;
  &lt;/vue-aspect-ratio&gt;
&lt;/div&gt;
            </code>
          </pre>
        </div>
        <div class="example">
          <div class="wrapper vue-ar2">
            <vue-aspect-ratio width="150px">
              <div class="content content-2">
                <div>Width 150px</div>
              </div>
            </vue-aspect-ratio>
          </div>
        </div>
      </div>
      
      <div class="example-wrapper">
        <div class="code">
          <pre>
            <code>
&lt;div style=&quot;width: 320px&quot;&gt;
  &lt;vue-aspect-ratio ar=&quot;16:9&quot;&gt;
    &lt;div&gt;
      &lt;div&gt;AR 16:9&lt;/div&gt;
    &lt;/div&gt;
  &lt;/vue-aspect-ratio&gt;
&lt;/div&gt;
            </code>
          </pre>
        </div>
        <div class="example">      
          <div class="wrapper vue-ar3">
            <vue-aspect-ratio ar="16:9">
              <div class="content content-3">
                <div>AR 16:9</div>
              </div>
            </vue-aspect-ratio>
          </div>
        </div>
      </div>

      <div class="example-wrapper">
        <div class="code">
          <pre>
            <code>
&lt;div&gt;
  &lt;vue-aspect-ratio width=&quot;100px&quot; ar=&quot;16:9&quot;&gt;
    &lt;div&gt;
      &lt;div&gt;AR 1:2&lt;/div&gt;
      &lt;div&gt;width: 100px&lt;/div&gt;
    &lt;/div&gt;
  &lt;/vue-aspect-ratio&gt;
&lt;/div&gt;
            </code>
          </pre>
        </div>
        <div class="example">
          <div class="wrapper vue-ar4">
            <vue-aspect-ratio ar="1:2" width="100px">
              <div class="content content-4">
                <div>AR 1:2</div>
                <div>width: 100px</div>
              </div>
            </vue-aspect-ratio>
          </div>
        </div>
      </div>
    </div>

    <div class="show">
      <vue-aspect-ratio ar="1:2" width="120px">
        <div class="content content-4">
          <div>AR 1:2</div>
        </div>
      </vue-aspect-ratio>
      <vue-aspect-ratio ar="1:1" width="240px">
        <div class="content content-4">
          <div>Square</div>
        </div>
      </vue-aspect-ratio>
      <vue-aspect-ratio ar="16:9" width="426px">
        <div class="content content-4">
          <div>16:9</div>
        </div>
      </vue-aspect-ratio>
    </div>

    <div class="show-gif">
      <vue-aspect-ratio ar="16:9">
        <div class="content content-4">
          <div>16:9 fully responsive</div>
        </div>
      </vue-aspect-ratio>
    </div>
  </div>
</template>


<style>
.show {
  display: none;
  /* display: flex; */
  justify-content: space-around;
}
.show-gif {
  display: none;
}
.show > div {
  box-shadow: 0px 0px 6px 3px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.example-wrapper {
  width: 100%;
}
.code, .example {
  display: inline-flex;
  vertical-align: middle;
  width: 45%;
}
.code {
  margin: 10px 0;
  text-align: left;
  background: #333;
  color: #f0f0f0;
  font-size: 1.2em;
}
.example {
  justify-content: flex-end;
}

.wrapper {
  box-shadow: 0px 0px 6px 3px;
}

.vue-ar1 {
  width: 200px;
}
.vue-ar3 {
  width: 320px;
}

.content {
  background-color: salmon;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content > div {
  font-weight: 600;
}

</style>