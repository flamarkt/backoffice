<?php

namespace Flamarkt\Backoffice;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Http\UrlGenerator;

class ForumAttributes
{
    protected $url;

    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        if ($serializer->getActor()->can('backoffice')) {
            $url = $this->url->to('backoffice')->base();

            return [
                'backofficeUrl' => $url,
                // Same logic as Flarum uses to generate basePath
                'backofficePath' => parse_url($url, PHP_URL_PATH) ?: '',
            ];
        }

        return [];
    }
}
