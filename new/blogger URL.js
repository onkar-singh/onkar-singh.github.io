Specific Post by URL
<b:if cond='data:blog.url == data:blog.canonicalHomepageUrl + "2014/08/foo.html"'> 
<!-- a item page from august 2014 with post-title 'foo'-->
</b:if>

<b:if cond='data:blog.url == data:blog.homepageUrl'>
<!--Homepage-->
</b:if>

<b:if cond='data:blog.url == data:blog.homepageUrl'> 
<!-- only homepage -->
</b:if>
  
<b:if cond='data:blog.url == data:post.url'>
<!--Post and Static Pages->
</b:if>

<b:if cond='data:blog.url == "URL"'>
<!--Specific Page-->
</b:if>

<b:if cond='data:blog.pageType != &quot;index&quot;'>
  <!-- all pages NOT index pages -->
</b:if>

//  /search/label/FunPages
<b:if cond='data:blog.searchLabel'>
...CODE for all Label Pages...
</b:if>

<b:if cond='data:blog.searchLabel== &quot;LABEL_NAME&quot;'>
...CODE for specific Label Page...
</b:if>

//  /search?q=indian
<b:if cond='data:blog.searchQuery'>
...CODE for all Search Pages...
</b:if>

<b:if cond='data:blog.searchQuery == &quot;SEARCH_QUERY&quot;'>
...CODE for specific Search Page...
</b:if>
  
<b:if cond='CONDITION-CODE-1'>
<!--..Action-Code-1...-->
<b:elseif cond='CONDITION-CODE-2'/>
<!--..Action-Code-2...-->
<b:else/>
<!--..Default-Action-Code...-->
</b:if>

<b: if  cond='CONDITION-CODE-1 && CONDITION-CODE-2'>
<!--..Action-Code...-->
</b: if >
<b: if  cond='CONDITION-CODE-1 || CONDITION-CODE-2'>
<!--..Action-Code...-->
</b: if >

<b:if cond='data:blog.pageType == "item"'>
    # THIS CONTENT WILL BE EXECUTED IF CONDITION IS TRUE
    # i.e. if current page is post (item) page
<b:else/>
    # THIS CONTENT WILL BE EXECUTED IF CONDITION IS FALSE
    # i.e. if not post page
</b:if>


//  new version
<b:if cond='data:view.isHomepage'> … </b:if>
<b:if cond='data:view.isMultipleItems'> … </b:if>
<b:if cond='data:view.isSingleItem'> … </b:if>
<b:if cond='data:view.isPost'> … </b:if>
<b:if cond='data:view.isPage'> … </b:if>
<b:if cond='data:view.isLabelSearch'> … </b:if>
<b:if cond='data:view.isArchive'> … </b:if>

  <b:if cond='data:blog.url == data:blog.homepageUrl'> 
			<b:comment><!-- 1. (homepage) only homepage --></b:comment>
		<b:elseif cond='data:blog.pageType == "item"'/>
			<b:comment><!-- 2. (page/post) all item pages --></b:comment>
		<b:elseif cond='data:blog.pageType == "static_page"'/>
			<b:comment><!-- 3. (page) all static pages --></b:comment>
		<b:elseif cond='data:blog.pageType == "archive"'/>
			<b:comment><!-- 4. (archive) all archive pages --></b:comment>
		<b:elseif cond='data:blog.searchQuery'/>
			<b:comment><!-- 5. (search) all search pages --></b:comment>
		<b:elseif cond='data:blog.searchLabel'/>
			<b:comment><!-- 6. (search/label) all label pages --></b:comment>
		<b:elseif cond='data:blog.pageType == "index"'/>
			<b:comment><!-- 7. (homepage/search) all index pages --></b:comment>
		<b:elseif cond='data:blog.pageType == "error_page"'/>
			<b:comment><!-- 8. all error pages --></b:comment>
		<b:else/>
			<b:comment><!-- unknown pages --></b:comment>
		</b:if>