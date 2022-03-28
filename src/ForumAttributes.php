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
            return [
                'backofficeUrl' => $this->url->to('backoffice')->base(),
            ];
        }

        return [];
    }
}
